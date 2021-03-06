import { connectToDatabase } from '../../util/mongodb'
import { ObjectId } from "mongodb"
import Router from 'next/router'

/*helper function to calculate a user's total exercise time on a treadmill*/
  function diff (start, end) {
    // var start_date = new Date(JSON.stringify(start));
    // console.log(`start_date: ${start_date}`)
    // var end_date = new Date(JSON.stringify(end));
    // console.log(`end_date: ${end_date}`)
    console.log(`start_date: ${start}`)
    console.log(`end_date: ${end}`)
    var diff = end.getTime() - start.getTime();
    console.log(`diff: ${diff}`)
    return diff;
    // var diff_h = Math.floor(diff / 1000 / 60 / 60);
    // diff -= diff_h * 1000 * 60 * 60;
    // var diff_m = Math.floor(diff / 1000 / 60);
    // diff -= diff_m * 1000 * 60;
    // var diff_s = Math.floor(diff / 1000);
    // var diff_ms = diff - diff_s * 1000;

    // return (diff_h <= 9 ? "0":"") + diff_h + ":" + (diff_m <= 9 ? "0":"") + diff_m + ":" + (diff_s <= 9 ? "0":"") + diff_s + ":" + (diff_ms <= 9 ? "0":"") + diff_ms;
  }

async function handler (req, res) {
  //connect to MongoDB
  const { db } = await connectToDatabase()
  //console.log(db)
  const { method, body } = req;


  const name = body.name;
  const action = body.action;
  const like = body.likedBy;
  const password = body.password;
  const nickname = body.nickname;

  switch( method ) {
    //write into data base
    case "POST":
      //const tread =  db.collection("Treadmills").find({_id: id})
      switch (action) {
        //occupy a treadmill
        case "occupy":
          const id = new ObjectId(body._id);
          console.log(id)
          const treadmill = await db.collection("Treadmills").findOne(
            {_id : id}, 
            { status: 1, 
              who_occupied: 1,
              start_time: 1,
              end_time: 1,
              totalTime: 1,
            })
          await db.collection("Treadmills").updateOne(
            { _id: id },
            { $set: { error: 0}})
          const user_occupy = await db.collection("User").findOne(
            { nickname: nickname },
            { start_time: 1 ,
             has_occupied: 1})
          //console.log("find the treadmill")
          //console.log(JSON.stringify(treadmill))
          //console.log(treadmill.status)
          if (treadmill.status === 1 && user_occupy.has_occupied === 0)
            { console.log("I am in branch that will occupy")
              const start = new Date()
              //console.log(JSON.stringify(start))
              await db.collection("Treadmills").updateOne(
                { _id: id },
                { $set: { status: 0, who_occupied: nickname}})
              const user = await db.collection("User").findOne(
              { nickname: nickname },
              { start_time: 1 })
              await db.collection("User").updateOne(
                { nickname: nickname },
                { $set: { start_time : start, has_occupied: 1}},
                console.log(`start time: ${user.start_time}`))
                res.status(200).send("equipment occupied")
            }
          else{ 
            if (treadmill.who_occupied === nickname && user_occupy.has_occupied === 1)
            {
              console.log("I am in branch that will unoccupy")
              const end = new Date()
              //console.log(JSON.stringify(end))
              await db.collection("Treadmills").updateOne(
                { _id: id },
                { $set: { status: 1, who_occupied: "", Liked_By: []}})

              const user = await db.collection("User").findOne(
                { nickname: nickname },
                { totalTime: 1 ,
                 start_time: 1,
                 end_time: 1} )
              await db.collection("User").updateOne(
                { nickname: nickname },
                { $set: 
                    {totalTime: user.totalTime + diff(user.start_time, end), 
                    start_time: new Date(),
                    end_time: new Date(),
                    has_occupied: 0}},
                //console.log(`total time: ${user.totalTime}`),
                //console.log(`start time: ${user.start_time}`),
                //console.log(`end time: ${user.end_time}`)
              )
              res.status(200).send("finished exercise !")
            }
            else
            {
              if (user_occupy.has_occupied === 1){
                // await db.collection("Treadmills").updateOne(
                //   { _id: id },
                //   { $set: { error: 1}})}
                res.status(200).send("You cannot occupy two equipments at the same time!");
              }
              else if(treadmill.who_occupied !== nickname){
                // await db.collection("Treadmills").updateOne(
                //   { _id: id },
                //   { $set: { error: 2}})
                res.status(200).send("This machine is currently occupied by others!");
              }
              else{
                // await db.collection("Treadmills").updateOne(
                //   { _id: id },
                //   { $set: { error: 3}})
                res.status(200).send("There is some internal errors, please contact developer!")
              }
              //res.statusMessage = "This machine has already been occupied by others";
              //res.status(317).end()
              console.log("I am in branch that will alert")
              // the alert still does not work, try something else later
              // window.alert("This machine has already been occupied by others");
            }
          }
          //console.log("I exited the branch and return 200")
          
          // Router.push('/')
          break;
        case "like":
          const id2 = new ObjectId(body._id);
          //console.log(like)
          //like other's exercise on this treadmill、
          const treadmill_like = await db.collection("Treadmills").findOne(
            {_id : id2}, 
            { Liked_By:1, status: 1})
          if(treadmill_like.status===0){
            let index = treadmill_like.Liked_By.indexOf(nickname)
            console.log(index)
            if( index === -1)
            { //console.log("like")
              treadmill_like.Liked_By.push(nickname)}
            else{
              //cancel like
              //console.log("cancel like")
              treadmill_like.Liked_By.splice(index, 1)
            }
            //console.log(treadmill_like.Liked_By)
            await db.collection("Treadmills").updateOne(
              { _id: id2 },
              { $set: { Liked_By: treadmill_like.Liked_By}}
            )
            res.status(200).send('Liked exercise!')
          } else {
            res.status(200).send("No one occupied yet")
          }
          // Router.push('/')
          break;
        case "signup":
          // try to find the user passed in
          const user = await db.collection("User").findOne(
            { username: name},
            {
              username: 1,
              password: 1,
              nickname: 1,
            })
          if (!user) {
            //cannot find an existing user with the typed in username
            await db.collection("User").insertOne(
              {
                username: name,
                password: password,
                nickname: nickname,
                start_time: new Date(),
                end_time: new Date(),
                totalTime: 0,
                plan: new Array(),
				has_occupied: 0
              }
            ) 
            console.log(`Congrats! You have successfully Signed Up!\n \
                      Your Username is ${name}\n \
                      Your Password is ${password}\n
                      Your Nickname is ${nickname}...`)
            res.status(200).send("created one")
            
          } 
          // else {
          //   // check password if exist
          //   if (user.password === password){
          //     console.log("loged in")
          //   } else {
          //     console.log("incorrect password")
          //   }
          //   // console.log(user.username, user.password)
          // }
          else{
            res.status(200).send("User already exist!")
          }
          break;
        case "add":
          const plan = body.plan
          console.log(plan)
          console.log(body.currentPlan)
          var currentPlan = body.currentPlan
          const index = currentPlan.indexOf(plan)
          if(index===-1 && plan!==" " && plan.length===10){
            currentPlan.push(plan)
          } else if (index !== -1 && plan!==" " && plan.length===10){
            currentPlan.splice(index, 1)
          }
          await db.collection("User").updateOne(
            {nickname: nickname},
            { $set:{plan: currentPlan}}
          )
          res.status(200).send("added a new exercise plan" )
          break;
      }
      break;
    //read only   
    case "GET":
      /*other cases here*/
      
      break;
  }
}



export default handler;
// import bcrypt from "bcrypt";
// import config from "../../../config/config";
// import User from "../../models/User";

// /**
//  * addUser
//  * Here admin add new user
//  * return JSON
//  */
// const addUser = async (req, res) => {
//   console.log("new user");
//   try {
//     const emailExist = await User.find({ email: req.body.email });
//     if (emailExist.length > 0) {
//       res.status(401).json({ msg: "Email already exist" });
//     } else {
//       const hash = bcrypt.hashSync(req.body.password, config.SALT_ROUND);
//       const addUser = new User({
//         fullName: req.body.fullName,
//         emailId: req.body.emailId,
//         contactNumber: req.body.contactNumber,
//         usertype: req.body.usertype,
//         password: hash,
//         usertype: "U",
//         is_verified: true,
//       }).save();
//       res.status(200).json({ msg: "User has been added Successfully." });
//     }
//   } catch (err) {
//     console.log("Error => ", err.message);
//     res.status(500).json({ msg: "Something went wrong." });
//   }
// };

// /**
//  * listUser
//  * Here fetch all user
//  * return JSON
//  */
// const listUser = async (req, res) => {
//   console.log("existing user");
//   try {
//     //.populate({ path: "universityId", model: "university", select: "universityName" })
//     let keyword = req.query.keyword;
//     let limit = 10;
//     let page = req.query.page;
//     var skip = limit * page;
//     const list = await User.find({
//       is_deleted: false,
//       usertype: "U",
//       // $or: [
//       //     { full_name: { $regex: keyword, $options: 'm' } },
//       //     { phone_number: { $regex: keyword, $options: 'm' }  }
//       // ]
//     })
//       .skip(skip)
//       .limit(limit)
//       .sort({ created: "DESC" });
//     const listAll = await User.find({
//       is_deleted: false,
//       usertype: "U",
//       // $or: [
//       //     { full_name: { $regex: keyword, $options: 'm' } },
//       //     { phone_number: { $regex: keyword, $options: 'm' }  }
//       // ]
//     }).countDocuments();
//     const AllData = {
//       list: list,
//       count: listAll,
//       limit: limit,
//     };
//     res.status(200).json({ data: AllData });

//     /*const list = await User.find({
//             is_admin: false,
//             is_deleted: false
//         })
//         res.status(200).json({data: list});*/
//   } catch (err) {
//     console.log("Error => ", err.message);
//     res.status(500).json({ msg: "Something went wrong." });
//   }
// };

// export default { addUser, listUser };

import bcrypt from "bcrypt";
import config from "../../../config/config";
import User from "../../models/User";
const addUser = async (req, res) => {
  console.log("req", req.body);
  try {
    const emailExist = await User.find({ email: req.body.emailId });
    if (emailExist.length > 0) {
      res.status(401).json({ msg: "Email already exist" });
    } else {
      const addUser = new User({
        fullName: req.body.fullName,
        emailId: req.body.emailId,
        contactNumber: req.body.contactNumber,
        usertype: "U",
        is_verified: true,
      }).save();
      res.status(200).json({ msg: "User has been added Successfully." });
    }
  } catch (err) {
    console.log("Error => ", err.message);
    res.status(500).json({ msg: "Something went wrong." });
  }
};
const listUser = async (req, res) => {
  try {
    let keyword = req.query.keyword;
    // let limit = 10;
    let page = req.query.page;
    // var skip = limit * page;
    const list = await User.find({
      is_deleted: false,
    })
      // .skip(skip)
      // .limit(limit)
      .sort({ created: "DESC" });
    const listAll = await User.find({
      is_deleted: false,
    }).countDocuments();
    const AllData = {
      list: list,
      count: listAll,
      // limit: limit,
    };
    res.status(200).json({ data: AllData });
  } catch (err) {
    console.log("Error => ", err.message);
    res.status(500).json({ msg: "Something went wrong." });
  }
};
export default { addUser, listUser };
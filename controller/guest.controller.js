const Guest = require("../model/guest.model");

//create guest function
async function CreateGuest(req, res) {
  try {
    const guest = new Guest(req.body);
    await guest.save();

    res.status(200).json({
      message: "Guest created successfully",
      guest,
    });
  } catch (error) {
    console.log(error);
  }
}
//get/read/find all requests
async function getGuest(req, res) {
  try {
    const guest = await Guest.find({});

    res.status(201).json({
      message: "ALL GUEST INFOMATIONS FOUND",
      guest,
    });
  } catch (error) {
    console.log(error);
  }
}

//get a guest by ID
async function getGuestId(req, res) {
  try {
    const guestId = req.params.id;
    const guest = await Guest.findById(guestId);

    if (guest) {
      res.status(200).json({
        message: "GUEST INFORMATION FOUND BY ID WAS SUCCESSFUL",
        guest: guest,
      });
    } else {
      res.status(404).json({
        message: "NO GUEST INFORMATION AVAILABLE",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

//GET GUEST INFORMATION BY TITLE

// async function getByTitle(req, res) {
//   try {
//     const guestTitle = req.params.title;
//     const guest = await Guest.findByTitle(guestTitle);

//     if (guest) {
//       res.status(200).json({
//         message: "GUEST(HOST) INFORMATION IS FOUND",
//         guest: guest,
//       });
//     } else {
//       res.status(404).json({
//         message: "NO GUEST(HOST) INFORMATION FOUND",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

//update guest
async function updateGuest(req, res) {
  const guest = await Guest.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "afterUpdate",
  });

  if (guest) {
    res.status(200).json({
      message: "GUEST INFORMATION UPDATED SUCCESFULLY",
      guest,
    });
  } else {
    res.status(404).json({
      message: "GUEST INFORMATION NOT AVAILABLE",
    });
  }
}

///DELETE GUEST INFORMATION
async function deleteGuest(req, res) {
  const guest = await Guest.findByIdAndDelete(req.params.id, req.body);
  if (guest) {
    res.status(200).json({
      message: "GUEST INFORMATION DELETED SUCCESSFULLY",
    });
  } else {
    res.status(404).json({
      message: "NO GUEST INFORMATION FOUND",
    });
  }
}
module.exports = {
  CreateGuest,
  getGuest,
  getGuestId,
  // getByTitle,
  updateGuest,
  deleteGuest,
};

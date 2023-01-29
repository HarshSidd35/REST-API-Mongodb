require("../models/db");
const Movie = require("../models/movie");

// /api/movies/
// GET All movies

exports.listMovies = async (req, res) => {
  //   res.send("Hello");

  try {
    if (!req.query.q == "") {
      const movies = await Movie.find({ $text: { $search: req.query.q } });
      res.json(movies);
    } else {
      const movies = await Movie.find({});
      res.json(movies);
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.insertMovie = async (req, res) => {
  const newmovie = new Movie({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
  });
  try {
    await newmovie.save();
    res.status(200).json({ message: "Inserted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.updateMovie = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;

  try {
    const EditMovie = await Movie.updateOne({ _id: id }, { name: name });
    res.status(200).json({ message: "Successfully Updated" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};



exports.deleteMovie = async (req, res) => {
    const id = req.params.id;
 
    try {
      const DeleteMovie = await Movie.deleteOne({ _id: id });
      res.status(200).json({ message: "Successfully Deleted" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };

// async function insertMovies() {
//   try {
//     await Movie.insertMany([
//       {
//         name: "abc",
//         description:'ajskaskaldjkf',
//         category : ['1','2','3','4'],
//         thumbnail : 'agqyiugeqbchjbdcqe'
//       },{
//         name: "hjd",
//         description:'uyeruyqwej',
//         category : ['1','2','3','4'],
//         thumbnail : 'nxb nmzb nmbbahjb'
//       },{
//         name: "whk",
//         description:'opipoiroiir',
//         category : ['1','2','3','4'],
//         thumbnail : 'nmxcnzmxbcjsw'
//       },{
//         name: "ertqertqw",
//         description:'sdjfksjkdnc',
//         category : ['1','2','3','4'],
//         thumbnail : 'qytwrtyqreyw'
//       },{
//         name: "bcnmbznbe",
//         description:'ajsksjhvjbvaaskaldjkf',
//         category : ['1','2','3','4'],
//         thumbnail : '3uiywiuewe'
//       },{
//         name: "wueyqiuw",
//         description:'mcvabdj',
//         category : ['1','2','3','4'],
//         thumbnail : 'kjqhejkfhJKSJHF'
//       },
//     ]);
//   } catch (error) {
//     console.log(error);
//   }
// }

// // insertMovies();

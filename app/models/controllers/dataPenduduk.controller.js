const db = require("..");
const DP = db.dataPenduduk;

exports.findAll = (req, res) => {
  DP.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error while retrieving data.",
      });
    });
};

exports.create = (req, res) => {
  const dp = new DP({
    nama: req.body.nama,
    alamat: req.body.alamat,
    nik: req.body.nik,
    pekerjaan: req.body.pekerjaan,
    isNikah: req.body.isNikah ? req.body.isNikah : false,
  });

  dp.save(dp)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "some error while create data.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  DP.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: "Cannot find data." || err.message,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  DP.findByIdAndUpdate(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Data not found!",
        });
      }
      res.send({
        message: "Data was updated!",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "some error while Update data.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  DP.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Data not found!",
        });
      }
      res.send({
        message: "Data was deleted",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "some error while delete data.",
      });
    });
};

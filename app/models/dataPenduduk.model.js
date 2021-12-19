const { object, boolean } = require("webidl-conversions");
const { mongoose } = require(".");

module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nama: String,
      alamat: String,
      nik: Number,
      pekerjaan: String,
      isNikah: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const DP = mongoose.model("dataPenduduk", schema);
  return DP;
};

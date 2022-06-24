const axios = require("axios");

class JobController {
  static async getAllJob(req, res) {
    try {
      const jobs = await axios.get(
        "http://dev3.dansmultipro.co.id/api/recruitment/positions.json"
      );
      if (jobs.data.length > 0) {
        res.status(200).json({
          message: "Data dari API",
          data: jobs.data,
        });
      } else {
        res.status(200).json({
          message: "Tidak Ada Data",
          data: [],
        });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  static async getAllJobSearch(req, res) {
    try {
      const { description } = req.query;

      const jobs = await axios.get(
        "http://dev3.dansmultipro.co.id/api/recruitment/positions.json"
      );
      // if(jobs.data.length > 0){
      //     res.status(200).json({
      //         message: "Data dari API",
      //         data: jobs.data
      //     })
      // }
      // else{
      //     res.status(200).json({
      //         message: "Tidak Ada Data",
      //         data: []
      //     })
      // }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  static async getJobInformationById(req, res) {
    try {
      const id = req.params.id;
      let jobs = await axios.get(
        `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
      );
      res.status(200).json(jobs.data);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = JobController;

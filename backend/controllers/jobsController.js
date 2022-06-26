const axios = require("axios");

class JobController {
  static async getAllJob(req, res) {
    try {
      const jobs = await axios.get(
        "http://dev3.dansmultipro.co.id/api/recruitment/positions.json"
      );
      res.status(200).send(jobs.data);
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
      res.status(200).send([jobs.data]);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = JobController;

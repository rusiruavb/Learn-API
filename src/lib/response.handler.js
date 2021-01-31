export default {
  respond: function(res, status = 200) {
    return function(data) {
      console.log("Inside the respond function");
      if (data == null) {
        res.status(404).json({status: 404, message: "Not found!"});
        return;
      }
      res.status(status).json(data);
      return;
    }
  },

  notFound: function(res, status = 404) {
    return function(data) {
      // console.log("Inside Not found function");
      if (data == null) {
        res.status(status).json({status: 404, message: "Information Not Found"});
        return;
      }
      return data
    }
  },

  handleError: function(res, status = 500) {
    return function(data) {
      console.log("Inside the handleError function");
      if (data == null) {
        res.status(404).json({status: 404, message: "Not found!"});
        return;
      }
      res.status(status).json({status: status, message: "Error"});
      return;
    }
  }
}
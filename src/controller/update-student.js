module.exports = function makeupdateStudentAction({updateStudent}){
    return async (req,res) => {
       try {
        let {id,fieldData} = req.body;
        const { lan } = req.params;
        fieldData = JSON.parse(fieldData);
        const result = await updateStudent({id,fieldData,lan});
        res.status(201).send(result);
       } catch (error) {
        console.log(error);
        const status = error.httpStatusCode ? error.httpStatusCode : 404;
        res.status(status).json({
          status: 'error',
          error: error.message
        })
       }
    }
}
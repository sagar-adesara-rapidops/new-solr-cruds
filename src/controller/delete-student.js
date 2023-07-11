module.exports = function makedeleteStudent({deleteStudent}){
    return async (req,res) => {
       try {
        const { id } = req.query;
        const { lan } = req.params;
        await deleteStudent({id,lan});
        res.status(204).send();
       } catch (error) {
        console.log(error);
        const status = error.httpStatusCode ? error.httpStatusCode : 400;
        res.status(status).json({
          status: 'error',
          error: error.message
        })
       }
    }
}
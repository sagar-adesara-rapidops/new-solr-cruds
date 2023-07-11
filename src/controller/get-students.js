module.exports = function makegetstudentsAction({getAllStudents}){
    return async (req,res)=>{
        try {
             const {field,value,fl,sort,start,rows} = req.query;
             const { lan } = req.params;

             const result = await getAllStudents({field,value,fl,sort,start,rows,lan});
     
             res.status(200).send(result);
 
           } catch (error) {
             console.log(error.message);
             const status = error.httpStatusCode ? error.httpStatusCode:404;
             res.status(status).json({
                 status: 'error',
                 error: error.message
             })
           }
    }
}
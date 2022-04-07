const Works=require('works.js');

@Works.routes
class Index{
    @Works.route("/")
    @Works.method(["GET"])
    index(req,res,context){
        console.log(context);
        res.write("say hello works.js");
        res.end();
    }
}

const indexInstance=new Index();


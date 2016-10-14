
$(function(){
    var output=$('.output');
    var btns=$('.btn');
    var btnsdel=$('.btn-ac').add('.btn-ce').add('.btn-result');
    var btnscal=btns.not(btnsdel);
    var txt='';
    output.on('keydown',function(e){
        e.returnValue=false;
    });
    btnscal.on('click',function(){
        txt+=$(this).text();
        output.val(txt);
    });
    $('.btn-ac').on('click',function(){
        txt=txt.slice(0,txt.length-1);
        output.val(txt);
    });
    $('.btn-ce').on('click',function(){
        txt='';
        output.val('');
    });
    $('.btn-result').on('click',function(){
        try{
            txt=''+eval(txt);
        }catch(ex){
            output.val('oh! No! I can\'t figure out!');
        }
        finally{
            output.val(eval(txt));
        }
    });
})

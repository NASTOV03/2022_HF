let set = false;

function loadUnload(){
    if(set === false){
        $('<link>')
            .appendTo('head')
            .attr({
                type: 'text/css',
                rel: 'stylesheet',
                href: 'index.css'
            });

        set=true;
    }else{
        $('link[rel=stylesheet]').remove();
        set=false;
    }

}
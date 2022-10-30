let c = 2;
let interval = setInterval(()=>{print_table()},5000);


const colors = ['#000000','#ff0000','#0033ff','#1aff00','#ffd500','#8400ff','#00ffbb','#342567','#112233',]
const size = ['14px','16px','18px','20px','22px','24px','26px','28px','30px']

function print_table(){
    if (c===11){
        clearInterval(interval)
        return
    }

    let row = document.createElement('tr');
    row.innerText = `${c} ${c*2} ${c*3} ${c*4} ${c*5} ${c*6} ${c*7} ${c*8} ${c*9} ${c*10}`
    row.style.fontSize=size[c-2];
    row.style.color=colors[c-2];
    let elem = document.getElementsByClassName('table');
    console.log(elem)
    setTimeout(()=>{
        elem[0].appendChild(row);
        c=c+1;
        }, 200
    )
}
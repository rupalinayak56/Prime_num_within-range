let taskFormEl=document.getElementById('task-form');
let taskEl=document.getElementById('task-el');

taskFormEl.addEventListener('submit',function(e)
{
    e.preventDefault();
    sessionStorage.clear();
    let task=Number(taskEl.value.trim());
    for(let i=1;i<=task;i++)
    {
        let fcount=0;
        for(let fa=1;fa<=Math.trunc(i/2)+1;fa++)
        {
            if(i%fa==0)
            {
                fcount++;

            }
            
        }
        if(fcount===1)
        {
            //console.log(`prime: ${i}`);
            let taskList=sessionStorage.getItem('tasks')?JSON.parse(sessionStorage.getItem('tasks')):[];
            
            taskList.push(i);
            sessionStorage.setItem('tasks',JSON.stringify(taskList));
            displayPrime();
            
        }
    }
    
});
function displayPrime()
{
    let taskList=sessionStorage.getItem('tasks')?JSON.parse(sessionStorage.getItem('tasks')):[];

    if(taskList.length!=0)
    {
        let eachnum=``;
        for(let task of taskList)
        {
            eachnum+=`<li class="list-group-item mb-2">
                                <span>${task}</span>
                              
                            </li>`;
        }
        document.getElementById('display').innerHTML=eachnum;
    }
}
displayPrime();
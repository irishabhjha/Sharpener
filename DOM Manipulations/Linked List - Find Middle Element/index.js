//========== User's Code Starts Here ==========
'use strict';

process.stdin.setEncoding('utf-8');
/**
 */

/**
 */
var findMiddleElement = function(head) {
   let p = head;
   let q = head;
   while(q && q.next)
   {
        p = p.next;
        q = q.next.next;
   }
	// return the middle node of the linked list
    return p;
	// return the middle node of the linked list
};
//Dont change anything below. If changed click on reset.
function ListNode(val,next) {
  return {
    val: val,
    next: next==undefined?null:next,
  };
}
async function readInput() {
        let inputString = '';
        var output=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            var linklistvalues = inputArr[0].split('->');
            var head=ListNode(parseInt(linklistvalues[0]));
            var temp =head;
            var count=2;
            for(var i=1;i<linklistvalues.length;i++)
            {
                var new_node = ListNode(parseInt(linklistvalues[i]));
                count=count+1;
                temp.next=new_node;
                temp=new_node;
            }
     var output = findMiddleElement(head);
    if(output!=null)
    {
        console.log(output.val);
    }
    else
    console.log(-1);
            
            
            process.exit();
            
        })
        

}
readInput();
//========== User's Code Ends Here ==========

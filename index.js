// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
   return Math.abs(blocks - 42) 
   
    
}

function distanceFromHqInFeet(blocks) {
    return Math.abs((blocks - 42) * 264)
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs((startBlock - endBlock) * 264)

}

function calculatesFarePrice(startBlock, endBlock) {
   let distance = Math.abs((startBlock - endBlock) * 264)
   if (distance < 400) {
       return 0
   } else if (distance < 2000) {
       return (distance - 400) *.02
   } else if (distance > 2000 && distance < 2500) {
       return 25
   } else if (distance >= 2500) {
       return 'cannot travel that far'
   }

} 
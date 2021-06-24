import myvid from "./myvideo.mp4"
import poster from "./poster.png"
function vde () {
     return (
     <div id='contenaire-video' style= {{border:'solid 1px black', maxwidth:'100vw'}}> 
     <h1>My Video Player </h1>
     <p> if you want you can see the video </p>
     <video width="320" height="240" controls  poster ={ poster}
     src={myvid} />
     </div>
     )
}
export default vde
import "./Albums.css";
import React from "react";

const Album = ({ name, picture, artist }) => {
  return (
    <section className="projects-clean">
       <div className="container">
      <div className="col-sm-6 col-lg-4 item">
        <h3 className="name">{name}</h3>
        <img className="img-thumbnail" src={picture} alt="album" />
        <p className="description">{artist.name}</p>
      </div>
      </div>
    </section>
    /*
    <section class="projects-clean">
    <div class="container">
        <div class="intro">
            <h2 class="text-center">Women of Hip-Hop</h2>
            <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
        </div>
        <div class="row projects">
            <div class="col-sm-6 col-lg-4 offset-lg-0 item"><img class="img-fluid" src="desk.jpg" />
                <h3 class="name">Shuffle</h3>
                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
            </div>
            <div class="col-sm-6 col-lg-4 item"><img class="img-fluid" src="building.jpg" />
                <h3 class="name">Your favorites</h3>
                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
            </div>
            <div class="col-sm-6 col-lg-4 item"><img class="img-fluid" src="loft.jpg" />
                <h3 class="name">Albums</h3>
                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
            </div>
            <div class="col-sm-6 col-lg-4 item"><img class="img-fluid" src="minibus.jpeg" />
                <h3 class="name">Artists</h3>
                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
            </div>
            <div class="col-sm-6 col-lg-4 item"><img class="img-fluid" src="minibus.jpeg" />
                <h3 class="name">Your profile</h3>
                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
            </div>
        </div>
    </div>
</section>
    */
  );
};

export default Album;

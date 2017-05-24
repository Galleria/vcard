<html>
    <head>
        <link rel="stylesheet" href="font/css/font-awesome.min.css">
        <script src="animation/aos.js"></script>
        <link rel="stylesheet" href="animation/aos.css" />
        <style>
            /* Media Queries */
            /* Card sizing */
            /* Colors */
            /* Calculations */
            /* Placeholders */
@media (min-width: 1000px) {

  #timeline .demo-card:nth-child(odd) .head::after, 
  #timeline .demo-card:nth-child(even) .head::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    
  }
  

  #timeline .demo-card:nth-child(odd) .head::before, 
  #timeline .demo-card:nth-child(even) .head::before {
    position: absolute;
    content: "";
    width: 9px;
    height: 19px;
    background-color: #bdbdbd;
    border-radius: 9px;
    box-shadow: 0px 0px 2px 8px #f7f7f7;
    z-index: 9;
  }
  

  #timeline .demo-card:nth-child(odd) .head::before, 
  #timeline .demo-card:nth-child(even) .head::after{
      /*content: attr(date-is);*/
      color: black;
      display: block;
  }
  
}

/* Border Box */
* {
  box-sizing: border-box;
}

/* Fonts */
body {
  font-family: Roboto;
}

#timeline {
  padding: 100px 0;
  background: #f7f7f7;
  border-top: 1px solid rgba(191, 191, 191, 0.4);
  border-bottom: 1px solid rgba(191, 191, 191, 0.4);
}
#timeline h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: 200;
  margin-bottom: 20px;
}
#timeline p.leader {
  text-align: center;
  max-width: 90%;
  margin: auto;
  margin-bottom: 45px;
}
#timeline .demo-card-wrapper {
  position: relative;
  margin: auto;
}
@media (min-width: 1000px) {
  #timeline .demo-card-wrapper {
    display: flex;
    /*flex-flow: column wrap;*/
    /*flex-flow: row wrap; */
    width: 1170px;
    /*height: 1650px;*/
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

/*
#timeline .demo-card-wrapper::after , .demo-card::after{
  z-index: 1;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  border-left: 1px solid rgba(191, 191, 191, 0.4);
}

@media (min-width: 1000px) {
  #timeline .demo-card-wrapper::after , .demo-card::after{
    border-left: 1px solid #bdbdbd;
  }
}
*/
.demo-card:nth-child(odd)::after {
  z-index: 1;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  /*left: 100%;*/
  right:-12.5%;
  border-left: 1px solid rgba(191, 191, 191, 0.4);
}

@media (min-width: 1000px) {
  .demo-card:nth-child(odd)::after {
    border-left: 1px solid #bdbdbd;
  }
}

.demo-card:nth-child(even)::before{
  z-index: 1;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -12%;
  /*right: 0%;*/
  border-left: 1px solid rgba(191, 191, 191, 0.4);
}

@media (min-width: 1000px) {
  .demo-card:nth-child(even)::before{
    border-left: 1px solid #bdbdbd;
  }
}

#timeline .demo-card {
  position: relative;
  display: block;
  /*margin: 10px auto 80px;*/
  margin:0px calc(5%/2)+0px 80px;
  max-width: 94%;
  z-index: 2;
}

.demo-card{
    margin-bottom: 30px;
}

#timeline .year-card , #timeline .date-time-card{
    position: relative;
    display: flex;
    z-index: 2;
    margin:20px 2px 20px;
    max-width: 100%;
    color:white;
    flex-basis: 100%;
    justify-content:center;
}

/*
@media (min-width: 480px) {
  #timeline .demo-card {
    max-width: 60%;
    box-shadow: 0px 1px 22px 4px rgba(0, 0, 0, 0.07);
  }
}
@media (min-width: 720px) {
  #timeline .demo-card {
    max-width: 40%;
  }
}
*/
@media (min-width: 1000px) {
  #timeline .demo-card {
    width: 50%;
    max-width: 450px;
    /*height: 400px;*/
    /*margin: 90px;*/
    /* margin-top: 45px; */
    /*margin-bottom: 45px;*/
    -webkit-align-self: flex-start;
   align-self: flex-start;
  }
  /*
  #timeline .demo-card:nth-child(odd) {
    margin-right: 45px;
  }
*/
  #timeline .demo-card:hover .head::before{
      background-color : #FF6B6B;
  }

  #timeline .demo-card:nth-of-type(odd) .head::after {
    border-left-width: 15px;
    border-left-style: solid;
    left: 100%;
  }
  
  #timeline .demo-card:nth-child(odd) .head::before {
    left: 501px;
  }
/*
  #timeline .demo-card:nth-child(even) {
    margin-left: 45px;
  }
  */
  #timeline .demo-card:nth-of-type(even) .head::after {
    border-right-width: 15px;
    border-right-style: solid;
    right: 100%;
  }
  #timeline .demo-card:nth-child(even) .head::before {
    right: 499px;
  }
  /*
  #timeline .demo-card:nth-child(even) {
    margin-top: 140px;
  }
  */
  #timeline .demo-card:nth-child(even) {
    margin-top: 140px;
  }
  
}
#timeline .demo-card .head {
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 400;
}
#timeline .demo-card .head .number-box {
  display: inline;
  float: left;
  margin: 15px;
  padding: 10px;
  font-size: 35px;
  line-height: 35px;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.17);
}
#timeline .demo-card .head h2 {
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: inherit;
  letter-spacing: 2px;
  margin: 0;
  padding-bottom: 6px;
  line-height: 1rem;
}
/*
@media (min-width: 480px) {
  #timeline .demo-card .head h2 {
    font-size: 165%;
    line-height: 1.2rem;
  }
}
#timeline .demo-card .head h2 span {
  display: block;
  font-size: 0.6rem;
  margin: 0;
}
@media (min-width: 480px) {
  #timeline .demo-card .head h2 span {
    font-size: 0.8rem;
  }
}
*/
#timeline .demo-card .body {
  background: #fff;
  border: 1px solid rgba(191, 191, 191, 0.4);
  border-top: 0;
  padding: 15px;
}


/*
@media (min-width: 1000px) {
  #timeline .demo-card .body {
   /* height: 315px;* /
  }
}
*/

#timeline .demo-card .body p {
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 15px;
}
#timeline .demo-card .body img {
  display: block;
  width: 100%;
}

#timeline .demo-card--step1 {
  background-color: #46b8e9;
}
#timeline .demo-card--step1 .head::after {
  border-color: #46b8e9;
}
#timeline .demo-card--step2 {
  background-color: #3ee9d1;
}
#timeline .demo-card--step2 .head::after {
  border-color: #3ee9d1;
}
#timeline .demo-card--step3 {
  background-color: #ce43eb;
}
#timeline .demo-card--step3 .head::after {
  border-color: #ce43eb;
}
#timeline .demo-card--step4 {
  background-color: #4d92eb;
}
#timeline .demo-card--step4 .head::after {
  border-color: #4d92eb;
}
#timeline .demo-card--step5 {
  background-color: #46b8e9;
}
#timeline .demo-card--step5 .head::after {
  border-color: #46b8e9;
}

#timeline .year-card--step6 .head{
  background-color: aquamarine;
}

#timeline .year-card--step6 .head h2{
    background-color: rgba(0, 0, 0, 0.17);
}

#timeline .demo-card--step7 {
  background-color: #FF6B6B;
}
#timeline .demo-card--step7 .head::after {
  border-color: #FF6B6B;
}

        </style>
    </head>
    <body>

<div>
    <section id="timeline">
        <h1>A Flexbox Timeline</h1>
        <p class="leader">All cards must be the same height and width for space calculations on large screens.</p>
        
        <div class="demo-card-wrapper">

            <div class="demo-card demo-card--step1"  data-aos="zoom-in">
                <div>
                    <div class="head" >
                        <div class="number-box">
                            <span>01</span>
                        </div>
                        <h2><span class="small">Subtitle</span> Technology</h2>
                    </div>
                    <div class="body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                        <img src="http://placehold.it/1000x500" alt="Graphic">
                    </div>
                </div>
            </div>

            <div class="demo-card demo-card--step2"  data-aos="zoom-in">
                <div class="head">
                    <div class="number-box">
                        <span>02</span>
                    </div>
                    <h2><span class="small">Subtitle</span> Confidence</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src="http://placehold.it/1000x500" alt="Graphic">
                </div>
            </div>

            <div class="demo-card demo-card--step3"  data-aos="zoom-in">
                <div class="head">
                    <div class="number-box">
                        <span>03</span>
                    </div>
                    <h2><span class="small">Subtitle</span> Adaptation</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src="http://placehold.it/1000x500" alt="Graphic">
                </div>
            </div>

            <div class="demo-card demo-card--step4"  data-aos="zoom-in">
                <div class="head">
                    <div class="number-box">
                        <span>04</span>
                    </div>
                    <h2><span class="small">Subtitle</span> Consistency</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src="http://placehold.it/1000x500" alt="Graphic">
                </div>
            </div>

            <div class="demo-card demo-card--step5"  data-aos="zoom-in">
                <div class="head">
                    <div class="number-box">
                        <span>05</span>
                    </div>
                    <h2><span class="small">Subtitle</span> Conversion</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src="http://placehold.it/1000x500" alt="Graphic">
                </div>
            </div>

            <div class="demo-card demo-card--step7"  data-aos="zoom-in" >
                <div class="head">
                    <div class="number-box">
                        <span>06</span>
                    </div>
                    <h2><span class="small">Subtitle</span> Conversion</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                </div>
            </div>

            <div class="demo-card demo-card--step7"  data-aos="zoom-in" >
                <div class="head">
                    <div class="number-box">
                        <span>06</span>
                    </div>
                    <h2><span class="small">Subtitle</span> Conversion</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                </div>
            </div>

            <div class="demo-card demo-card--step7"  data-aos="zoom-in" >
                <div class="head">
                    <div class="number-box">
                        <span>06</span>
                    </div>
                    <h2><span class="small">Subtitle</span> Conversion</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                </div>
            </div>

            <div class="demo-card demo-card--step7"  data-aos="zoom-in" >
                <div class="head">
                    <div class="number-box">
                        <span>06</span>
                    </div>
                    <h2><span class="small">Subtitle</span> Conversion</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                </div>
            </div>

            <div class="demo-card demo-card--step7"  data-aos="zoom-in" >
                <div class="head">
                    <div class="number-box">
                        <span>06</span>
                    </div>
                    <h2><span class="small">Subtitle</span> Conversion</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                </div>
            </div>

            <div class="demo-card demo-card--step7"  data-aos="zoom-in" >
                <div class="head">
                    <div class="number-box">
                        <span>06</span>
                    </div>
                    <h2><span class="small">Subtitle</span> Conversion</h2>
                </div>
                <div class="body">
                    <p></p>
                </div>
            </div>

            <div class="demo-card demo-card--step7"  data-aos="zoom-in" >
                <div class="head">
                    <div class="number-box">
                        <span>06</span>
                    </div>
                    <h2><span class="small">Subtitle</span> Conversion</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                </div>
            </div>
        
            
            <div class="year-card year-card--step6"  data-aos="zoom-in">
                <div class="head">
                    <div>
                        <h2>2015</h2>
                    </div>
                </div>
            </div>

        </div>
    </section>
</div>

    </body>


    <script>
        AOS.init();
    </script>

</html>

import React, { Component } from 'react';
import Speech from '../components/Speech'
import Lyrics from '../components/Lyrics'
import Scoreboard from '../components/Scoreboard'
import { connect } from 'react-redux'
import '../stylesheet/player.css'
import { loadLyrics, saveScore, resetScore } from '../Redux/actioncreator'
import here from "../lrc/here_without_you-3_doors_down.lrc"
import wreck from "../lrc/wrecking_ball-miley_cyrus.lrc"
import backstreet from "../lrc/i_want_it_that_way-backstreet_boys.lrc"
import toto from '../lrc/africa-toto.lrc'
import neyo from '../lrc/because_of_you-ne_yo.lrc'
import queen from '../lrc/bohemian_rhapsody-queen.lrc'
import george from '../lrc/careless_whisper-george_michael.lrc'

import dancing from '../lrc/dancing_queen-abba.lrc'
import touch from '../lrc/everytime_we_touch-cascada.lrc'
import alicia from '../lrc/if_i_aint_got_you-alicia_keys.lrc'
import beyonce from '../lrc/irreplaceable-beyonce.lrc'
import jenny from '../lrc/jenny_from_the_block-jennifer_lopez.lrc'
import knock from '../lrc/knock_you_down-keri_hilson.lrc'
import killers from '../lrc/mr_brightside-the_killers.lrc'
import scrub from '../lrc/no_scrubs-tlc.lrc'
import clout from '../lrc/clout-ty_dolla_sign.lrc'
import piano from '../lrc/piano_man-billy_joel.lrc'
import september from '../lrc/september-earth_wind_fire.lrc'
import adele from '../lrc/set_fire_to_the_rain-adele.lrc'
import sing from '../lrc/sing-my_chemical_romance.lrc'
import valerie from '../lrc/valerie-amy_winehouse.lrc'
import maui from '../lrc/your_welcome-maui.lrc'
import cher from '../lrc/believe-cher.lrc'
import firework from '../lrc/firework-katy_perry.lrc'






class JukeBox extends Component {

  componentDidMount = () => {
    this.props.loadLyrics(this.props.currentSong)
    this.createCanvas()
    console.log(dancing)
    console.log(touch)
    console.log(alicia)
    console.log(beyonce)
    console.log(jenny)
    console.log(knock)
    console.log(killers)
    console.log(scrub)
    console.log(piano)
    console.log(september)
    console.log(adele)
    console.log(sing)
    console.log(valerie)
    console.log(maui)
    console.log(cher)

    console.log(this.props.currentSong)
  }

 // creates a background effect for the canvas just so that there would be a little light atleast
  createCanvas = () => {
    const jukebox = document.getElementById('jukebox')
    var canvas = document.createElement("canvas"),
      c = canvas.getContext("2d"),
      particles = {},
      particleIndex = 0,
      particleNum = 10;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    jukebox.appendChild(canvas); // adds newly created canvas to body
    c.fillStyle = "blue";
    c.fillRect(0,0,canvas.width,canvas.height);
      function Particle(){
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.vx = Math.random() * 10 - 5; // -4,1,0,4,5,-2,3 (-5..5?)
        this.vy = Math.random() * 10 - 5; // (0..10) - 5 // -5..5
        this.gravity = 0.5;
        particleIndex++;
        particles[particleIndex] = this;
        this.id = particleIndex;
        this.life = 0;
        this.maxLife = Math.random() * 30 + 50; // iterate 100 times then die
        this.color = "hsla("+parseInt(Math.random()*255, 30)+",60%,55%)";
      }
      Particle.prototype.draw = function(){
        this.x += this.vx;
        this.y += this.vy;
        if(Math.random() < 0.1){
          this.vx = Math.random() * 10 - 5;
          this.vy = Math.random() * 10 - 5;
        }
        this.life++;
        if (this.life >= this.maxLife){
          delete particles[this.id];
        }
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, 10, 10);
      };
      setInterval(function(){
        c.globalCompositeOperation = "source-over";
        c.fillStyle = "rgba(0,0,0,0.1)";
        c.fillRect(0,0,canvas.width,canvas.height);
        for(var i = 0; i < particleNum; i++){
          new Particle();
        }
        c.globalCompositeOperation = "lighter";
        for (var i in particles){
          particles[i].draw();
        }
      }, 30)
  }

  componentWillUnmount = () => {
    this.props.saveScore(this.props.currentUser.id,this.props.currentSong.id,this.props.score)
    this.props.resetScore()
  }

  // this checks the timestamp of the first lyrics against the current time and also checks it agains the timestampe of the upcoming lyric and current time to continously render the same lyric until it's time to render out the next one
    renderLyrics = () => {
         for (let i=0; i< this.props.myLyrics.length -1 ;i++) {
           if(this.props.currentTime > this.props.myLyrics[this.props.myLyrics.length-1].timestamp){
            return <p className="lyric"> FINAL SCORE OF:{this.props.score} </p>
           }
          else if(this.props.myLyrics[i].timestamp < this.props.currentTime && this.props.myLyrics[i+1].timestamp > this.props.currentTime){
            return <Lyrics  key={this.props.myLyrics[i].timestamp} lyric={this.props.myLyrics[i]} currentSong={this.props.currentSong} />
          }
        }
    }

    render(){
      return (
          <div id="jukebox">``
            <Scoreboard />
            {this.renderLyrics()}
            <Speech />
          </div>
      )
    }
  }


  const mapStateToProps = state => {
    return {
      myLyrics: state.lines,
      currentTime: state.secondsElapsed,
      currentSong: state.currentSong,
      score:state.score,
      currentUser:state.authCurrentUser,
      currentSong: state.currentSong
    }
  }







export default connect(mapStateToProps,{ loadLyrics, saveScore, resetScore })(JukeBox)

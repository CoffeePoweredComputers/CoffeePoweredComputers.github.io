import React, {Component} from 'react';//
import { Link } from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

var i = 0;
var j = 0;
var k = 0;
var elem_count = 0;
var txt = "David Hamilton Smith IV";
var roles = ["programmer", "researcher","person","thing","asych is the devil"];
var speed = 100;

function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

function typeWriter() {

    if(elem_count < roles.length){
        console.log("hi");
        //show the intro
        if(i < txt.length) {

            document.getElementById("intro").innerHTML += txt.charAt(i);
            i++;
        } else{
            
            if(k < roles[elem_count].length){

                document.getElementById("roles").innerHTML += roles[elem_count].charAt(k);
                k++;
                j++

            } else if (j >= 0 && elem_count < (roles.length - 1)){

                document.getElementById("roles").innerHTML = document.getElementById("roles").innerHTML.slice(0,j);
                j--;
                

            } else{

                k = 0;
                elem_count++;

            }
        }
        setTimeout(typeWriter, speed);
    }
    
}
export default class Home extends Component{    

    componentDidMount(){
        typeWriter();
    }

    render(){
            return(
                <div class="cursor container">
                    <div class="name" id="intro"></div>
                    <div class="positions" id="roles"></div>
                </div>

            )
    }
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
            var imgsrc="img/xe/blue/1.png";
            $("#blue").click(function(){
                $("#preview").attr("src", "img/xe/blue/1.png");
                $("#item1").attr("src", "img/xe/blue/1.png");
                $("#item2").attr("src", "img/xe/blue/2.png");
                $("#item3").attr("src", "img/xe/blue/3.png");
                $("#item4").attr("src", "img/xe/blue/4.png");
            });
            $("#white").click(function(){
                $("#preview").attr("src", "img/xe/white/1.png");
                $("#item1").attr("src", "img/xe/white/1.png");
                $("#item2").attr("src", "img/xe/white/2.png");
                $("#item3").attr("src", "img/xe/white/3.png");
                $("#item4").attr("src", "img/xe/white/4.png");
            });
            $("#black").click(function(){
                $("#preview").attr("src", "img/xe/black/1.png");
                $("#item1").attr("src", "img/xe/black/1.png");
                $("#item2").attr("src", "img/xe/black/2.png");
                $("#item3").attr("src", "img/xe/black/3.png");
                $("#item4").attr("src", "img/xe/black/4.png");
            });
        });
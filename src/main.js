import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isValidDate, checkWeekday } from './weekday.js';

$(document).ready(function(){
    $("#myForm").submit(function(){
        event.preventDefault();
        let input = $("#checkDate").val();
        let output = `${input} is `;
        console.log(input);
        console.log(output);
        if(isValidDate(input))
        {
            output += checkWeekday(new Date(input));
        }
        else
        {
            output += 'Invalid Date';
        }
        console.log(output);
        $("#result").text(output);
    })
})
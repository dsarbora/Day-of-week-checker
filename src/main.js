import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isValidDate, checkWeekday } from './weekday.js';

$(document).ready(function(){
    $("#myForm").submit(function(){
        event.preventDefault();
        let input = $("#checkDate").val();
        let output;
        if(isValidDate(input))
        {
            output = checkWeekday(new Date(input));
        }
        else
        {
            output = 'Invalid Date';
        }
        $("#result").text(output);
    })
})
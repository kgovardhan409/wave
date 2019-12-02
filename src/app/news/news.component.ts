import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {


  }
  ngAfterViewInit() {
    $('.number').each(function () {
      $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
  ngOnChanges(){
   
  }

}




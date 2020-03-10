import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
weatherData;
  constructor(private weatherService :WeatherService) { }

  ngOnInit() {
    
    this.weatherService.getWeatherData()
    .subscribe( (d)=> {
      console.log('d', d);
      this.weatherData = JSON.parse(d['body']);
    })
}

}




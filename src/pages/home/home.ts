import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { mcategory } from "../../shared/mcategory";
import { CategoryDbProvider } from "../../providers/category-db/category-db";
import { scategory } from "../../shared/scategory";
import { SubcatProvider } from "../../providers/subcat/subcat";
import { exp } from "../../shared/exp";
import { ExpdbProvider } from "../../providers/expdb/expdb";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public chartLabels               : any    = [];
  public chartValues               : any    = [];
  arr:mcategory[]=[];
  arr1:any[]=[];
  arr2:exp[]=[];
   @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  barChart: any;
  doughnutChart: any;
  lineChart :any;
  n:number=1000;
  z:number=0;
  i:number=0;
  sumexp:number=0;
  j:number=0;
  constructor(public navCtrl: NavController,public _data:CategoryDbProvider,
  public _data1:SubcatProvider,public _data2:ExpdbProvider) {

  }
  ionViewDidLoad() {
    
   // this.barChart = this.getBarChart(); 
    //this.doughnutChart = this.getDoughnutChart();   
    //this.lineChart = this.getLineChart();
    this._data.getAllCategories().subscribe(
      (data:mcategory[])=>{
        this.arr=data;
        
      }
      
      
    );

    for(this.i=0;this.i<this.arr.length;this.i++){
      this._data1.getScategoriesById(this.arr[this.i].cat_id).subscribe(
        (data:scategory[])=>{
          this.arr1=data;
          //alert(this.arr1.length);
          //console.log(data);
        }
        );
      
    }
    let len=this.arr1.length;
    alert(len);
    for(this.j=0;this.j<this.arr1.length;this.j++){
      alert('hello');
      alert(this.arr1[this.j].sub_cat_name);
    }
    //this.defineChartData();
  }
  defineChartData()
  {

    
   this.getValues1();
    
    
       /*for(this.i=0;this.i<this.arr.length;this.i++)
       {
        //alert('hello');
         this.chartLabels[this.i]=this.arr[this.i].cat_name;
         //alert(this.chartLabels[this.i]);
       }*/
    
    
  } 
  getValues1(){
    //alert(this.arr.length);
    
  }
  

  /*getvalues()
  {
    for(this.i=0;this.i<this.arr.length;this.i++)
    {
   

    this._data1.getScategoriesById(this.arr[this.i].cat_id).subscribe(
      (data:scategory[])=>{
        
        this.arr1=data;
        //this.sumexp=0;
        
        //alert(this.arr1.length);
        for(this.z=0;this.z<this.arr1.length;this.z++)
        {
        this._data2.getScategoriesById(this.arr1[this.z].fk_cat_id).subscribe(
          (data:exp[])=>{
            
            this.arr2=data;
            //alert(this.arr2.length);
            for(this.j=0;this.j<this.arr2.length;this.j++)
            {
             // alert(this.arr2[this.j].expense_amt);
                this.sumexp=this.sumexp+this.arr2[this.j].expense_amt;
                alert(this.sumexp);  
            }
            
          }

        );
      }

        //this.chartValues[this.z]=this.sumexp;
       // alert(this.chartValues[this.z]);
      }
    );
    }
   /* for(this.z=0;this.z<this.arr1.length;this.z++)
    {
      alert(this.arr1[this.z].sub_cat_id);
    }
}

 getChart(context, chartType, data, options?) {
  //alert(this.arr.length);
  return new Chart(context, {

    type: chartType,
    data: data,
    options: options
   
  });
}*/
/*
getBarChart() {
 
  let data = {
    labels: ["Red", "Brown", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '$ of Expenses',
      data: [100, 150, 220, 400, 600, 500 , 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(244, 164, 96, 0.8)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(244, 164, 96, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  let options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
}

return this.getChart(this.barCanvas.nativeElement, "bar", data, options);
}
getDoughnutChart() {
  let data = {
    labels: ["Red", "Brown", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(244, 164, 96, 0.8)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      hoverBackgroundColor: ["#FF6384", "#551a8b", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
    }]
  };

  return this.getChart(this.doughnutCanvas.nativeElement, "doughnut", data);
}
getLineChart() {
  var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        label: "Initial Dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 32],
        spanGaps: false,
      }
     
    ]
  };

  return this.getChart(this.lineCanvas.nativeElement, "line", data);
}
*/
}

   

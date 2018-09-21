I) What does it do?
   Calculates total wattage and cost per year if a light bulb is
   Incandescent, Halogen, CFL or LED.
   
   Those values are calculated based on inputs: Lumens, KiloWatt and hours usage
   per day.
   
II)Diagram of HTML

<ng-app="myCalculator">
<ng-controller="CalculatorController">

|---------------------------------------------------------------------
| {{hal_wattage}}
| {{hal_cost}}    
|---------------------------------------------------------------------
|
| ng-change="calculate()"
| ng-model="current_lumens"
| ng-options="o as o for o in lumen_options"
|----------------------------------------------------------------------
  
The above html layout covers only the  halogen part.
The other parts:incandescent, cfl or led behave the same.

III)This app demonstrates the single page application without refreshing the page.
    Upon a change of an input, 8 different displayable areas change immediately
    without a need to press a submit button.
    Thus this makes the consumer experience superb.
    
    Remember one less click to a web makes a huge difference in customer
    satisfaction.
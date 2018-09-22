
OUTPUT:
ValueA: {{valueA}}
7

ValueB: {{valueB}}
10


Expression: 7 + 10 {{valueA} + {valueB}}      <--Note the difference in the expression

Live Expression Value: 17 {{valueA + valueB}} <--Note the difference in the expression

[ng-click="addValues(valueA, valueB, $event)"]

Clicked Expression Value: {{valueC}}17
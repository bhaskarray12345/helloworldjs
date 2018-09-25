Watching Values in the AngularJS Scope
Select Color: red green blue   <--- Click any of these colors will increase the Changes.
[+] Hits: 11       <--- Click + button will increase its count but also increases the Changes.
[+] misses: 13
Object: { "color": "blue", "hits": 11, "misses": 13 } 
Number of Changes: 33


Chain action.
color is changed ===> $watch() ===> $Collection()

Explanation: change of color triggers $watch().  change of Object inside $watch()
             triggers $Collection()

Hit/Miss is clicked ===> $watchGroup() ===> $Collection()

Explanation: click of Hit/Miss changes hits/misses variables which triggers 
             $watchGroup().  change of Object inside $watchGroup() triggers 
             $Collection().
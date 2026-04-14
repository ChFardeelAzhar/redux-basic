Redux Architecture : Redux flow is Uni directional

View -> Button click -> action -> Reducer (process action) -> store -> Ui

-> components : folder
This components will be a folder which will hold all our components
like header, fotter, search bar, user same like Android composables

-> container : folder
This will be link our components with the redux which will be in the service folder. it will map components with redux

-> service : folder
it will hold all of our redux pillers

       -> action :
            Action wo phli cheez hoti ha jo kuch demand karti ha
            like user ne 'sign up' ka button click kya to ye jo click tha isko action bolain gay jo users ki taraf se interaction hogi wo 'action' hogi.

       -> reducer :
            User ke action ke bad trigger hoga 'reducer' ye basically user ke action ko lega usko process kare ga
            like in the 'sign up' case ye data ko store bane ga jo redux store uske andar add kar dega, dosre cause me jab profile pe user 'show profile tab' press kare ga to ye user ke us action ke bad (reducer) action ko process kare ga or store se profile user hi utha ke view ko de dega.

       -> constants : brain
            Ye basically batata ha dono files ko ke data actions se reducer me kesay jaye ga

            Mltb constant bataye ga ke kon sa data kis function me jaye ga.

            Action bohat saray functions ho saktay hain,
            reducer me bohat sari chezain ho sakti hian, to
            constant inko map karwaye ga.

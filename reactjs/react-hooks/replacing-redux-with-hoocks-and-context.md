### replacing redux with hoocks and context

***part 01***

https://medium.com/octopus-labs-london/replacing-redux-with-react-hooks-and-context-part-2-838fd20e6739?

**part 02**

https://medium.com/octopus-labs-london/replacing-redux-with-react-hooks-and-context-part-1-11b72ffdb533?

redux is cools, it is a way of getting separate components to alter and pull data from the main application store

there are things called reducers, actions, and action creators. there are methods like appDispathToProps and mapStateToProps 

redux can be described in three fundamentals principles or redux flow: stores, actions and reducers
- actions ***dispatch*** reducers
- reducers ***change store*** store
- store ***app state*** component
- component ***run action function*** actions

an action is the only thing that shold trigger a state change.. it typically returns an object with a **type** and a **payload**



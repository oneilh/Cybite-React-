## JSX Rules
- always return a single element
- we can use react fragment with adding extra nodes

```
    <React.Fragment></React.Fragment>
or
    <></>
```

## Nesting of components
```
    <section>
        <Navbar/>
        <Profile>
    </section>


    ## Navbar component
    <nav>
        <ul>
            <li></li>
            <li></li>
        </ul>
    </nav>
```

## React Dev Tools
- chrome, firefox, edge

## css
- style sheet
- css in jsx:
  -> style prop
  -> js object
  ```
  <h1 style={{background: 'red'}}></h1>
  ```
  -> passing as reference

## Images
- external
- Local

## Js in JSX
{}
value used with the curly bracket must be an expression (i.e return something) 
statement are not 
- using variables

## Props
- passing props
- using strings, variables as props
- objects as props
- destructuring props
- children props

## List and keys
- map
  objects can't can be rendered in react
  spread operator
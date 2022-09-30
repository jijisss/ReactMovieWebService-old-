# Movie App (old version)

<!-- 22-09-29 -->
1. component는 html을 반환하는 함수이다.
2. react는 component와 함께 동작하며 모든것은 component이다.
3. react는 component를 사용해서 html처럼 작성하려는 경우에 필요하다.
4. javascript + html = JSX. javascript안의 html => JSX
5. class component = class react component는 return 대신 render 메소드를 가지고있다.
ex) class App extends React.Component{
      render(){
            return <h1>Im a class component</h1>
      }
    }
6. class component와 function component는 차이점을 가진다.
   -Function component는 function이며 뭔가를 return함. 그리고 screen에 표시됨.
   -class component는 class지만 react component로부터 확장되고 screen에 표시됨.render 메소드안에 넣어야만함.
7. state는 object이고 component의 data를 넣을 공간이 있고 이 데이터는 변한다.
-state안에 바꿀 데이터를 넣음.
-state를 render안에 넣고싶으면 이렇게 작성함. {this.state.data} 
ex) class App extends React.Component{
      state = {
        count: 0
      };
      render(){
            return <h1>Im a class component {this.state.count} </h1>
      }
    }
8. setState를 사용하지 않으면 새 state와 함께 render function이 호출되지 않는다.
ex) this.setState({});
9. this.state.변수 대신 current를 가져와서 사용할 수 있다. 
-state를 set할 때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법임.
ex) this.setState(current => ({ count: current.count + 1 }));
10. 매순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출한다.
<!-- 아래는 function이 호출되는 순서이다. -->
11. constructor() = component가 mount될 때, component가 screen에 표시될 때, component가 웹사이트에 갈때 호출된다.
12. render()
13. componentDidMount() = component가 처음 render됐을 때 실행된다.
14. componentDidUpdate() = setState를 호출하면 component를 호출하고, 먼저 render를 호출한 다음 업데이트가 완료되면 실행된다.
15. componentWillUnmount() = component가 떠날 때 호출된다.
16. fetch() = 일반적으로 javascript에서 data를 fetch할 떄 사용하는 함수.
17. Axios = data를 fetch할 떄 사용하는 함수.
- 설치하는 방법 : npm i axios
- import하는 방법 : import axios from "axios"
-axios 함수는 항상 빠르지 않고 느릴 수 있음. 그래서 async await 함수를 사용해서 기다려줌.
ex) getMovies = async () => {
      const movies = await axios.get("url");
} 
componentDidMount() {
      this.getMovies();
}
<!-- 22-09-30 -->
18. css 파일을 만든 뒤 각각의 필요한 파일에서 import해와서 쓰는게 좋다.
ex) import "./Movie.css"
19. clas => className
20. for => htmlFor
21. map에 있는 각각 item은 key가 필요하다.
-map은 현재의 item, 그리고 item number를 제공한다.
22. slice() = 시작점과 끝점을 입력하면 그만큼의 string을 제공한다.
ex) summary.slice(0, 10)
23. 두개의 컴포넌트가 동시에 렌더링 되는것을 막는 법 = exact={true}를 첫번째 route에 추가해준다.
24. Link는 Router 밖에서 쓸 수 없다.
25. Router에 있는 모든 Route들은 props를 가진다. 이 props는 사용할 수 있다.
26. Link to=""를 사용할 때 to를 object로 변경할 수 있다.
ex) Link to={{
      pathname:"/about",
      state: {
            year.
            title,
            summary,
            poster,
            genres
      }
}}

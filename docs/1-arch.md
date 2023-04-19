### design the architect

#### ask ideas to design architect

![1681890767042](image/1-arch/1681890767042.png)

### confirm plugin architecture understanding

below plantuml is plugin architecture,  could you visualize your understanding to me

```uml
@startuml

!define INTRA_PROCESS_COLOR #438DD5

interface Behavior {
  +listenEvent(): Event
  +getContext(): Context
  +dispatchAction(): Action
}

interface Selector {
  +inspectAction(): Void
}

interface Provider {
  +produceDiff(scenario: Scenario): Diff
}

interface GPTPrompts {
  +callChatGPT(): JSON
}

interface ViewModel {
  +rendering(diff: Diff): void
}

Behavior -down-> Selector : dispatches
Selector -down-> Provider : calls (optional)
Provider -down-> GPTPrompts : calls
Selector -down-> ViewModel : invoke 

class Event << (E,INTRA_PROCESS_COLOR) >> {
  +name: String
  +payload: JSON
}
class Action << (E,INTRA_PROCESS_COLOR) >> {
  +type: ActionType
  +payload: JSON
}
class Scenario << (E,INTRA_PROCESS_COLOR) >> {
  +name: String
  +payload: JSON
}

class Diff << (E,INTRA_PROCESS_COLOR) >> {
  +json: JSON
}

enum ActionType {
  INTERACT,
  OPERATION,
  APPLY
}

Behavior -left-> Event : listens >>
Behavior -right-> Action : dispatches >>
Action -right-> Scenario : uses (OperationAction) >>
Provider -right-> Scenario : inputs >>
Provider -up-> Diff : outputs >>
ActionType <-up- Action : determines >>
@enduml
```

response from chatgpt

![1681891649218](image/1-arch/1681891649218.png)

#### prepare input

i build a visusal studio code plugin called `TDD-WITH-GPT` by using `Yo code` command,

* input

1. requirements

```
In order to **developers**
They want to use TDD more efficiently to help improve the **efficiency** and **quality** of software development
This **tdd-with-gpt**
is a Visual Studio Code software development** plugin**
It leverages ChatGPT's ability to **automatically** generate, refactor, and verify production code based on test cases
Unlike today's manual implementations
Our product provides **efficient** functional implementation, **smooth** TDD development experience
```

3. plugin architecture

Overall, the architecture follows a modular design, with clear separation between the different components and their responsibilities. The Behavior component manages the overall behavior of the plugin, while the Selector component selects the appropriate provider based on the action. The Provider component produces the required output, which may involve calling external services such as GPTPrompts. The ViewModel component is responsible for rendering the output based on the difference between the previous and current states. The use of enums, classes, and interfaces in the diagram allows for clear communication and understanding of the different components and their relationships.

below is detail design

```
@startuml

!define INTRA_PROCESS_COLOR #438DD5

interface Behavior {
  +listenEvent(): Event
  +getContext(): Context
  +dispatchAction(): Action
}

interface Selector {
  +inspectAction(): Void
}

interface Provider {
  +produceDiff(scenario: Scenario): Diff
}

interface GPTPrompts {
  +callChatGPT(): JSON
}

interface ViewModel {
  +rendering(diff: Diff): void
}

Behavior -down-> Selector : dispatches
Selector -down-> Provider : calls (optional)
Provider -down-> GPTPrompts : calls
Selector -down-> ViewModel : invoke 

class Event << (E,INTRA_PROCESS_COLOR) >> {
  +name: String
  +payload: JSON
}
class Action << (E,INTRA_PROCESS_COLOR) >> {
  +type: ActionType
  +payload: JSON
}
class Scenario << (E,INTRA_PROCESS_COLOR) >> {
  +name: String
  +payload: JSON
}

class Diff << (E,INTRA_PROCESS_COLOR) >> {
  +json: JSON
}

enum ActionType {
  INTERACT,
  OPERATION,
  APPLY
}

Behavior -left-> Event : listens >>
Behavior -right-> Action : dispatches >>
Action -right-> Scenario : uses (OperationAction) >>
Provider -right-> Scenario : inputs >>
Provider -up-> Diff : outputs >>
ActionType <-up- Action : determines >>
@enduml
```

could you help give some guideline how to implement this? and show me the project structure then

* output

![1681892120868](image/1-arch/1681892120868.png)

![1681892135753](image/1-arch/1681892135753.png)

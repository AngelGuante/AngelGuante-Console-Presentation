const FocusActiveInput = () => {
    const inputs = document.getElementsByTagName('input')
    var lastInput
    Array.prototype.forEach.call(inputs, (element, index) => {
        if (index !== (inputs.length - 1)) {
            element.setAttribute('readonly', true)
            element.removeEventListener('keydown', InputEventMethod, false)
        }
        else {
            lastInput = element
            element.focus()
        }
    })
    return lastInput
}

const AddInputEvent = () => {
    const element = FocusActiveInput()
    element.addEventListener('keydown', InputEventMethod)
}

const InputEventMethod = event => {
    if (event.keyCode === 13) {
        const value = (FocusActiveInput()).value
        if (value === '1') {
            const divText = document.createElement('span')
            divText.style.display = 'inherit'
            divText.style.textAlign = 'justify'
            divText.style.width = '40%'

            const span = document.createElement('span')
            span.setAttribute('class', 'span')
            span.textContent = `I am a skilled full-stack software developer with over three years of industry experience, possessing a deep knowledge of C#, JavaScript, and SQL Server. In my present role as a Web Developer at SIUBEN, my primary responsibilities include the development of high-performance web applications and providing technical assistance to my colleagues whenever required.
            As a dedicated professional, I remain committed to continuously challenging myself, seeking out novel opportunities to apply my problem-solving abilities. I am highly motivated to remain informed of emerging technologies and tools that can augment my capabilities and further enhance my contributions to the organization.`

            divText.appendChild(span)

            const content = (document.getElementsByClassName('content'))[0]
            content.appendChild(divText)
        }
        else {
            const span = document.createElement('span')
            span.setAttribute('class', 'span')
            span.textContent = `Command not recognized.`

            const content = (document.getElementsByClassName('content'))[0]
            content.appendChild(span)
        }
        AddInputSpans()
    }
}

const AddInputSpans = () => {
    const content = (document.getElementsByClassName('content'))[0]
    const divContent = document.createElement('div')
    divContent.setAttribute('class', 'content_input')

    const divContentLine1 = document.createElement('div')
    divContentLine1.setAttribute('class', 'content_input_line1')

    const span1 = document.createElement('span')
    span1.setAttribute('class', 'span1')
    span1.textContent = 'Administrator@Browser'

    const span2 = document.createElement('span')
    span2.setAttribute('class', 'span2')
    span2.textContent = 'V8'

    const span3 = document.createElement('span')
    span3.setAttribute('class', 'span3')
    span3.textContent = '~/Browser/Index.html'

    divContentLine1.appendChild(span1)
    divContentLine1.appendChild(span2)
    divContentLine1.appendChild(span3)
    divContent.appendChild(divContentLine1)
    content.appendChild(divContent)

    const content_input_line = document.createElement('div')
    content_input_line.setAttribute('class', 'content_input_line')

    const span = document.createElement('span')
    span.setAttribute('class', 'span')
    span.textContent = '$'

    const input = document.createElement('input')

    content_input_line.appendChild(span)
    content_input_line.appendChild(input)
    content.appendChild(content_input_line)

    AddInputEvent()
}

AddInputEvent()
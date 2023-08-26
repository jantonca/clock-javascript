# Clocks Test

This test demonstrates the synchronization of two clocks: one analogue clock with rotating hands and another digital clock. These clocks can work together or separately, and they update in real-time to display the current time.

## Features

- Synchronized analogue and digital clocks
- Analogue clock with rotating hour, minute, and second hands
- Digital clock displaying the current time in HH:MM:SS format
- Flexibility to display either clock or both clocks simultaneously

## Getting Started

To get started with the clocks test, follow these steps:

### Installation: Testing the App Locally

1. Clone the repository to your local machine.
2. Once you've cloned the app, you may test it locally by running npm commands inside the root folder.
```bash
$ npm install
$ npm run build
$ npm run preview
```
3. The vite preview command will boot up a local static web server that serves the files from dist at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.
4. You can check out a deployed version of the App on GitHub Pages by visiting the following URL: https://jantonca.github.io/clock-javascript/

### Usage

- The analogue clock displays rotating hands representing the hour, minute, and second.
- The digital clock shows the current time in HH:MM:SS format.
- Both clocks are synchronized and update every second.

## Configuration

The clocks test doesn't require any specific configuration. You can customize the visual styles of the clocks by modifying the `style.css` file.

## Usage Examples

### Displaying Both Clocks

```html
  <div id="clock-container-analogue">
    <div class="hour-hand">
      <div class="hour-rotation" id="hour-rotation"></div>
    </div>
    <div class="minute-hand">
      <div class="minute-rotation" id="minute-rotation"></div>
    </div>
    <div class="second-hand">
      <div class="second-rotation" id="second-rotation"></div>
    </div>
  </div>
<div id="clock-container-digital" class="clock-container-digital">
  <!-- Digital clock element -->
</div>
```

### Displaying Analogue Clock Only

```html
  <div id="clock-container-analogue">
    <div class="hour-hand">
      <div class="hour-rotation" id="hour-rotation"></div>
    </div>
    <div class="minute-hand">
      <div class="minute-rotation" id="minute-rotation"></div>
    </div>
    <div class="second-hand">
      <div class="second-rotation" id="second-rotation"></div>
    </div>
  </div>
```

### Displaying Digital Clock Only

```html
<div id="clock-container-digital" class="clock-container-digital">
  <!-- Digital clock element -->
</div>
```
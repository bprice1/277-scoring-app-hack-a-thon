export default () =>
  `
  <main>
  <button id="addScore">Add Score</button>
  <div>
            <button id="curveScore">Curve</button>
            <button id="getAverage">Average</button>
            <button id="tallyGrades">Tally</button>
        </div>
      <form>
        <div>
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>

        <div>
          <label for="studentID">Student ID</label>
          <input type="number" id="studentID" />
        </div>

        <div>
          <label for="score">Score</label>
          <input type="number" id="score" />
        </div>

          <input type="submit" value="Add Test Score!" />
      </form>
    </main>
`;

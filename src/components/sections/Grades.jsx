import { GRADES } from '../../data/content';

export default function Grades() {
  return (
    <section id="grades">
      <div className="container">
        <span className="sec-tag reveal">Material Science</span>
        <h2 className="sec-title reveal">Know Your Grade</h2>
        <p className="sec-sub reveal">
          From budget-friendly 201 to marine-grade 316 — we stock the full stainless spectrum.
        </p>

        <div className="grade-strip">
          {GRADES.map(({ grade, name, description }) => (
            <div key={grade} className="grade-box reveal">
              <div className="big">{grade}</div>
              <div className="name">{name}</div>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

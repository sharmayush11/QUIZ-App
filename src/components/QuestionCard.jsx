import React from 'react'

function QuestionCard() {
  return (
    <div className="card shadow p-4">
                <h4 className="fw-semibold">React is mainly used for?</h4>
                <div className="mt-3">
                    <button className="btn btn-outline-primary w-100 mt-2">Styling</button>
                    <button className="btn btn-outline-primary w-100 mt-2">Mobile Apps</button>
                    <button className="btn btn-outline-primary w-100 mt-2">Building UI</button>
                    <button className="btn btn-outline-primary w-100 mt-2">None</button>
                </div>
            </div>
  )
}

export default QuestionCard
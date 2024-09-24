import { type FC, useState } from "react";
import QuestionCard from "./QuestionCard";
import { produce } from "immer";

const List1: FC = () => {
	// 列表页
	const [questionList, setQuestionList] = useState([
		{ id: "q1", title: "问卷1", isPublished: false },
		{ id: "q2", title: "问卷2", isPublished: true },
		{ id: "q3", title: "问卷3", isPublished: false },
		{ id: "q4", title: "问卷4", isPublished: true },
	]);

	function add() {
		const r = Math.random().toString().slice(-3);
		setQuestionList(
			produce((draft) => {
				draft.push({
					id: `q${r}`,
					title: `问卷${r}`,
					isPublished: false,
				});
			}),
		);
	}

	function editQuestion(id: string) {
		console.log(`edit ${id}`);
	}

	function deleteQuestion(id: string) {
		setQuestionList(
			produce((draft) => {
				const index = draft.findIndex((q) => q.id === id);
				draft.splice(index, 1);
			}),
		);
	}

	function publishQuestion(id: string) {
		setQuestionList(
			produce((draft) => {
				const q = draft.find((q) => q.id === id);
				if (q) q.isPublished = true;
			}),
		);
	}

	return (
		<div>
			<h1>问卷列表页</h1>
			<div>
				{questionList.map((question) => {
					const { id, title, isPublished } = question;
					return (
						<QuestionCard
							key={id}
							id={id}
							title={title}
							isPublished={isPublished}
							editQuestion={editQuestion}
							deleteQuestion={deleteQuestion}
							publishQuestion={publishQuestion}
						/>
					);
				})}
			</div>
			<button type="button" onClick={add}>
				新增问卷
			</button>
		</div>
	);
};

export default List1;

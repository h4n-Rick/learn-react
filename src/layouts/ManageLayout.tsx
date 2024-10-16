import type { FC } from "react";
import { Outlet } from "react-router-dom";

const ManageLayout: FC = () => {
	return (
		<>
			<div className="flex p-6 w-[1200px] mx-auto">
				<div className="w-[120px]">
					<p>ManageLayout Menu</p>
					<button className="mt-2">创建问卷</button>
					<a className="mt-2">我的问卷</a>
					<a className="mt-2">星标问卷</a>
					<a className="mt-2">回收站</a>
				</div>
				<div className="flex-1 ml-14">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default ManageLayout;

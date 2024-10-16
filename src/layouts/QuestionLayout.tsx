import type { FC } from "react";
import { Outlet } from "react-router-dom";

const ManageLayout: FC = () => {
	return (
		<>
			<div className="flex p-6 w-[1200px] mx-auto">
				<div className="w-[120px]">Question Menu</div>
				<div className="flex-1 ml-14">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default ManageLayout;

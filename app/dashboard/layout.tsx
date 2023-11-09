import clsx from "clsx";
import SideNav from "../ui/dashboard/sidenav";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className={clsx("flex h-screen flex-col md:flex-row md:overflow-hidden")}>
			<div className={clsx("w-full flex-none md:w-64")}>
				<SideNav />
			</div>
			<div className={clsx("flex-grow p-6 md:overflow-y-auto md:p-12")}>{children}</div>
		</div>
	);
}

export default Layout;

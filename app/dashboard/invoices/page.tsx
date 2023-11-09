import { lusitana } from "@/app/ui/fonts";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import clsx from "clsx";
import { Suspense } from "react";

/**
 * 요구사항.
 *
 * 1. 사용자의 입력을 캡처.
 * 2. 검색 매개변수로 URL을 업데이트.
 * 3. URL을 입력 필드와 동기화 상태로 유지.
 * 4. 검색어를 반영하도록 테이블을 업데이트.
 */

async function Page({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		page?: string;
	};
}) {
	const query = searchParams?.query || "";
	const currentPage = Number(searchParams?.page) || 1;

	return (
		<div className="w-full">
			<div className="flex w-full items-center justify-between">
				<h1 className={clsx(lusitana.className, "text-2xl")}>Invoices</h1>
			</div>
			<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
				<Search placeholder="Search invoices..." />
				<CreateInvoice />
			</div>
			<Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
				<Table query={query} currentPage={currentPage} />
			</Suspense>
			<div></div>
		</div>
	);
}

export default Page;

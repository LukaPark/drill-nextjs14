import DashboardSkeleton from "../../ui/skeletons";

function Loading() {
	return <DashboardSkeleton />;
}

export default Loading;

/**
 * loading.tsx는 Suspense를 기반으로 구축된 특수 Next.js 페이지로,
 * 페이지 콘텐츠가 로드되는 동안 대체 항목으로 표시할 로딩 UI를 생성 할 수 있음.
 *
 * 정적인 컴포넌트들을 로딩 여부와 관계없이 화면에 그려짐 => 동적 콘텐츠가 로드되는 동안에도 상호작용 가능.
 *
 * 사용자는 다른 페이지로 이동하기 전에 페이지 로드를 기다릴 필요가 없음.*중단 가능한 탐색.
 */

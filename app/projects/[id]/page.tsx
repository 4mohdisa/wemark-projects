import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ProjectDetailsPageContent from '@/components/project-details-page-content';

export const metadata: Metadata = siteMetadata['/projects/[id]'];

interface ProjectDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { id } = await params;
  return <ProjectDetailsPageContent projectId={id} />;
}
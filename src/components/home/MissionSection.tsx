import { PageContainer } from '../layout/PageContainer';
import lecturePhoto from '../../assets/photos/mission-lecture.jpg';

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <img src={lecturePhoto} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[center_60%]" />
      <div className="absolute inset-0 bg-navy/75" />
      <PageContainer className="relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold tracking-wide text-highlight uppercase">Our Mission</span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">A community for those who care about development.</h2>
          <p className="text-base leading-relaxed text-white/85">
            We bring development economics beyond the classroom, connecting like-minded students
            who are eager to learn. Together, we explore new ideas and apply our skills and experiences to a
            shared passion for development economics.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

require "spec_helper"

describe "index", :type => :feature do
  before do
    visit "/"
  end

  it "takes you to the right episode path" do
    click_link "How to Build Meaningful Products"
    expect(current_path).to eq "/podcast/episode-3-ryan-singer/"

    visit "/"

    click_link "How to Fix the Developer Talent Shortage"
    expect(current_path).to eq "/podcast/episode-4-dave-hoover/"
  end

  it "shows people names in the right format" do
    expect(find("#podcast_list .podcast-item:last")).to have_text "How to Ship Well-Tested Software Faster"
  end

  it "should mark upcoming episodes" do
    # expect(find("#podcast_list .podcast-item:last")).to have_text "Upcoming"
    expect(find("#podcast_list .podcast-item:eq(1)")).not_to have_text "Upcoming"
    expect(find("#podcast_list .podcast-item:eq(2)")).not_to have_text "Upcoming"
    expect(find("#podcast_list .podcast-item:eq(3)")).not_to have_text "Upcoming"
    expect(find("#podcast_list .podcast-item:eq(4)")).not_to have_text "Upcoming"
  end

  it "should show josh and venkat" do
    expect(find(".footer-content")).to have_text "Josh Smith"
    expect(find(".footer-content")).to have_text "Venkat Dinavahi"
  end

end
